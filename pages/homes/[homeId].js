import React from 'react'
import { useRouter } from 'next/router'; 

import styles from "../../styles/home-details.module.css"

import db from "../../data/db.json";

 function SingleHome() {

   // دِستراکچر با نام‌های رشته‌ای و نگاشت به نام‌هایی که در جاوااسکریپت معتبرند
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
     adrress,
     // اضافه کن بقیه کلاس‌ها رو در صورت نیاز
   } = styles;

    const route = useRouter()
    console.log("router: ", route.query);
    console.log("db: ", db);

   const home = db.homes.find(home => home.id == route.query.homeId)
   console.log("home: ", home);
    
  return (
    <div className={homeDetails}>
      <div className={homeDetailsTop}>
        <div className={homeImg}>
          <img src="/img/house-1.jpeg" alt="" />
        </div>
        <div className={homeIntroduce}>
          <div className={homeTitle}>
            <h1>
              <span> {home.title} </span>
              <span>{home.price.toLocaleString("fa")} تومان</span>
            </h1>
            <div className={tags}>
              <span className={`${tag} ${greenTag}`}>ویژه</span>
              <span className={`${tag} ${brownTag}`}>برای اجاره</span>
            </div>
            <div className={adrress}>آدرس : شیراز، میدان ارم</div>
          </div>
          <div className={homeReview}>
            <div className={homeReviewTop}>
              <h2>مرور کلی</h2>
              <p className="">
                <span>کد ملک : </span>
                <span>hz-HZ15</span>
              </p>
            </div>
            <ul className={homeReviewBottom}>
              <li>
                <span>نوع ملک: </span>
                <span>{home.title}</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{home.roomCount.toLocaleString("fa")}</span>
              </li>
              <li>
                <span>متراژ</span>
                <span>{" "}{home.meterage.toLocaleString("fa")} متر مربع</span>
              </li>
              <li>
                <span>سال ساخت</span>
                <span>{" "} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={homeReviewBottom}>
        <div className={homeDetailsDescription}>
          <p className="">توضیحات</p>
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
            باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
            آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
            نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
            علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
            ایجاد کرد. در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
            اساسا مورد استفاده قرار گیرد. مشاوران دوطرفه به
            خریدار و فروشنده مشاوره می‌دهند. یک مشاور املاک
            وظیفه دارد که با صداقت به هر دو طرف معامله مشاوره و
            راهنمایی درستی بدهد. مشاوران دوطرفه باید از هر دو
            طرف چه فروشنده و چه خریدار بخواهند که یک قرارداد
            نمایندگی دوطرفه را امضا کنند. قوانین و مقررات خاصی
            برای مشاوران دوطرفه وجود دارد، این دست از مشاوران
            نسبت به دو دسته قبل کارشان سخت‌تر و پیچیده‌تر
            است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است.
          </p>
        </div>
      </div>
    </div>

  )
}

export default SingleHome