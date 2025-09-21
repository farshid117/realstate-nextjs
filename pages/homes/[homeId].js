import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/home-details.module.css";
import db from "../../data/db.json";

function SingleHome() {
  const {
    'home-details': homeDetails,
    'home-details-top': homeDetailsTop,
    'home-img': homeImg,
    'home-interduce': homeIntroduce,
    'home-title': homeTitle,
    tags,
    tag,
    'green-tag': greenTag,
    'brown-tag': brownTag,
    'home-review': homeReview,
    'home-review-top': homeReviewTop,
    'home-review-bottom': homeReviewBottom,
    'home-details-description': homeDetailsDescription,
    // اگر از بقیه استفاده می‌کنی اضافه کن
  } = styles;

  const route = useRouter();
  const [singleHome, setSingleHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // اگر هنوز homeId خالیه، صبر کن
    const homeId = route.query.homeId;
    if (!homeId) return;

    // اگر دیتای واقعی async بود این تابع async می‌بود
    const findHome = () => {
      const found = db.homes.find(h => String(h.id) === String(homeId));
      setSingleHome(found || null);
      setLoading(false);
    };

    findHome();
  }, [route.query.homeId]);

  // اگر هنوز دیتا نیومده، می‌تونی لودینگ یا placeholder نمایش بدی
  if (loading) {
    return <div className={homeDetails}>درحال بارگذاری...</div>;
  }

  if (!singleHome) {
    return <div className={homeDetails}>ملکی پیدا نشد.</div>;
  }

  // حالا مطمئنی singleHome وجود داره؛ از روش ایمن برای toLocaleString استفاده می‌کنیم
  const format = (num) => {
    if (num === undefined || num === null) return '-';
    try {
      return Number(num).toLocaleString("fa");
    } catch {
      return String(num);
    }
  };
  const formatYear = (year) =>
    new Intl.NumberFormat("fa", { useGrouping: false }).format(year);

  return (
    <div className={homeDetails}>
      <div className={homeDetailsTop}>
        <div className={homeImg}>
          <img src={singleHome.img || "/img/house-1.jpeg"} alt={singleHome.title || "house"} />
        </div>

        <div className={homeIntroduce}>
          <div className={homeTitle}>
            <h1>
              <span className=' font-bold'>{singleHome.title || "-"}</span>
              <span>{format(singleHome.price)} تومان</span>
            </h1>

            <div className={tags}>
              <span className={`${tag} ${greenTag}`}>ویژه</span>
              <span className={`${tag} ${brownTag}`}>برای اجاره</span>
            </div>

            <div className="adrress">آدرس : {singleHome.address || "شیراز، میدان ارم"}</div>
          </div>

          <div className={homeReview}>
            <div className={homeReviewTop}>
              <h2>مشخصات ملک</h2>
            </div>

            <ul className={homeReviewBottom}>
              <li>
                <span>کد ملک : </span>
                <span className=' font-bold'>{singleHome.code || '—'}</span>
              </li>
              <li>
                <span>نوع ملک: </span>
                <span className=' font-bold'>{singleHome.type || "-"}</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span className=' font-bold'>{format(singleHome.roomCount)}</span>
              </li>
              <li>
                <span>متراژ : </span>
                <span className=' font-bold'>{format(singleHome.meterage)} متر مربع</span>
              </li>
              <li>
                <span>سال ساخت : </span>
                <span className=' font-bold'>{formatYear(singleHome.year) || "-"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home-details-bottom">
        <div className={homeDetailsDescription}>
          <p>توضیحات</p>
          <p>
            {singleHome.description || `لورم ایپسوم ...`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleHome;
