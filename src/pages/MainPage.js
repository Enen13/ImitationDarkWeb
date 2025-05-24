import React from "react";
import LeakCard from "../components/LeakCard";
import HeaderBar from "../components/HeaderBar";
import "./MainPage.css";
import PostData from "../PostData.json";

const MainPage = () => {
  return (
    <div>
      <HeaderBar />
      <main>
        <section className="leak-section">
          <p className="leak-description">
            This site was created to mimic a dark web site.
            <br />
            You can rest assured that the personal information posted is not actual data.
          </p>

          <h2>Latest Data Leaks</h2>
          <div className="leak-list">
            {PostData.map((leak, idx) => (
              <LeakCard key={idx} title={leak.title} idx={idx} post_date={leak.post_date} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
