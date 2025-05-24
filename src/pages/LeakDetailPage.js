import React from "react";
import { useParams } from "react-router-dom";
import "./LeakDetailPage.css";
import LeakPriceCard from "../components/LeakPriceCard";
import LeakAnonBuyCard from "../components/LeakAnonBuyCard";
import HeaderBar from "../components/HeaderBar";
import PostData from "../PostData.json";

const renderStars = (stars) => {
	const total = 5;
	const filled = "★".repeat(stars);
	const empty = "☆".repeat(total - stars);
	return filled + empty;
};

const LeakDetailPage = () => {
	const { idx } = useParams();
	const leak = PostData[idx];

	if (!leak) return <div>존재하지 않는 데이터입니다.</div>;

	const sampleData = leak.sample;
	const title = leak.title;
	const post_date = leak.post_date;
	const stars = leak.stars;

	return (
		<div>
			<HeaderBar />
			<main className="leak-detail-main">
				<div className="leak-detail-content">
					<div className="leak-detail-card">
						<div className="leak-detail-title-row">
							<div className="leak-detail-title">{title}</div>
							<div className="leak-detail-date">{post_date}</div>
						</div>
						<div className="leak-detail-desc">
						<div className="leaked-info-container">
							{sampleData.map((item, index) => (
								<div key={index} className="leaked-entry">
								<p><strong>Name:</strong> {item.name}</p>
								{item.phone && <p><strong>Phone:</strong> {item.phone}</p>}
								{item.ssn && <p><strong>SSN:</strong> {item.ssn}</p>}
								{item.id && <p><strong>ID:</strong> {item.id}</p>}
								{item.email && <p><strong>Email:</strong> {item.email}</p>}
								<br />
								</div>
							))}
							</div>
							<br />
							<span className="leak-detail-stars">{renderStars(stars)} {stars}.0 stars</span>
						</div>
					</div>
				</div>
				<div className="leak-detail-sidebar">
					<LeakPriceCard idx={idx} />
					<LeakAnonBuyCard />
				</div>
			</main>
		</div>
	);
};

export default LeakDetailPage;