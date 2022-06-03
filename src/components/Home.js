import React from "react";
import { Link } from "react-router-dom";
import TopScroll from "./TopScroll";
import "./Home.css";

const myP = {
  p1: "مؤسسة الرندي للتدريب والتطوير",
  p2: "المخيم الصيفي",
  p3: "فرصتك لتوفير أنسب مكان لطفلك",
  p4: "نظرا لحلول الموسم الصيفي ودخول أطفالنا الأعزاء في عطلة طويلة، تقدم لكم مؤسسة الرندي للتدريب والتطوير بولاية سعيدة عرضها المتميز «المخيم الصيفي للطفل السعيدي» تحت شعار «معا لعطلة سعيدة وآفاق بعيدة في ولاية سعيدة»، حيث يضم هذا  المخيم دورات متنوعة وورشات مختلفة تبدأ من تعلم اللغات وتحسين الخط وتعلم جدول الضرب مرورا بنشاطات عصرية وحديثة مثل نشاط المذيع الصغير والمبدع الواعد، كما نحب أنْ نُنَوِّهَ إلى أنَّ هناك الكثير من الورشات الفنية لتعلم الفنون المسرحية والتشكيلية، والكثير الكثير من النشاطات الترفيهية والرحلات السياحية.",
  p15: "فئة البراعم: التحضيري – الأولى ابتدائي – الثانية ابتدائي",
  p25: "فئة الأشبال: [الثالثة – الرابعة – الخامسة] ابتدائي",
  p35: "فئة اليافعين: [الأولى – الثانية– الثالثة – الرابعة] متوسط",
  p6: "مقر مؤسسة الرندي: حي لاقار بجانب دوش الربيع عند مفترق الطرق لاقار",
  p7: "لمزيد من المعلومات يمكنكم الاتصال على الأرقام:",
  p8: " 0664544005 - 0559922505",
};

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <p className="first-title">{myP.p1}</p>
          <p className="first-title small">{myP.p2}</p>
          <p className="first-title">{myP.p3}</p>
          <div
            className="img"
            style={{ backgroundImage: `url("paint.png")` }}
          ></div>
          <p className="first-title edit">{myP.p4}</p>
          <ul className="category">
            <li className="kind">
              <Link to="/catego1" className="target">
                {myP.p15}
              </Link>
            </li>
            <li className="kind">
              <Link to="/catego2" className="target">
                {myP.p25}
              </Link>
            </li>
            <li className="kind">
              <Link to="/catego3" className="target">
                {myP.p35}
              </Link>
            </li>
          </ul>
          <p className="first-title phone">{myP.p7}</p>
          <p className="first-title phone">{myP.p8}</p>
          <p className="first-title third">{myP.p6}</p>
        </div>
      </section>
      <TopScroll />
    </>
  );
}
