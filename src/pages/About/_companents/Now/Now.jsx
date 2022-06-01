import React from "react";
import NowCard from "./_companent/NowCard";
import "../Now/Now.scss";
import orange from "../../../../icons/orange.svg";
import hozirda from "../../../../icons/hozirda1.png";
import hozirda2 from "../../../../icons/hozirda2.png";
import { Row, Col } from "react-bootstrap";

function Now() {
  return (
    <div className="product  globalContainer" id="Hozirda">
      <h3>Hozirda</h3>
      <p>
        Bugungi kunda korxonada qadimiy sharq tabobati va zamonaviy
        farmatsevtika yutuqlarini o‘zida jamlagan bog‘bonlar, farmatsevtlar,
        shifokorlar, akademiklar mehnat qilmoqda. Ayni paytda korxonada
        o‘zbekistonlik va xorijiy iste’molchilarning munosib ishonchiga ega
        bo‘lgan, salomatlik uchun samarali dori vositalari ishlab chiqarilmoqda.
      </p>
      <span>
        “Mehrigiyo” korxonasining asosiy faoliyati dorivor o‘simliklar va
        mevalar asosidagi mahsulotlar ishlab chiqarishdan iborat.
      </span>
      <div className="product__fructis">
        <h4>Bizning mahsulotlar turkumlari</h4>
        <div className=" product__fructis__asartiment ">
          <NowCard icon={orange} text={"Sharbatlar"}></NowCard>
          <NowCard icon={orange} text={"Choy"}></NowCard>
          <NowCard icon={orange} text={"Yog’"}></NowCard>
          <NowCard icon={orange} text={"Ziravorlar"}></NowCard>
          <NowCard icon={orange} text={"Asal"}></NowCard>
          <NowCard icon={orange} text={"Sovun"}></NowCard>
          <NowCard icon={orange} text={"Tabletkalar"}></NowCard>
          <NowCard icon={orange} text={"Lolipoplar"}></NowCard>
          <NowCard icon={orange} text={"Non"}></NowCard>
          <NowCard icon={orange} text={"Halva"}></NowCard>
          <NowCard icon={orange} text={"Sprey"}></NowCard>
        </div>
      </div>
      <div className="product__gardin ">
        <Row className="product__gardin__row">
          <Col lg={7}>
            <p>
              Для достижения высокого качества и увеличения эффективности
              продукции, растения и фрукты выращиваются органическим образом,
              без минеральных удобрений, без пестицидов, на частных посевных
              полях (плантациях) компании. Отбираются, готовятся и упаковываются
              в соответствии с требованиями мировых стандартов.
            </p>
            <p>
              {" "}
              Немаловажной частью заготовки является разделение растений по
              нужным частям — черенки, стебли, листья, бутоны, соцветия и
              семена. Кроме того, для приготовления разных продуктов рецептура
              требует различной степени измельчения, холодной или тепловой
              обработки, выдержки.
            </p>
            <p>
              Все эти процессы обеспечивают и контролируют
              высокопрофессиональные сотрудники компании, гарантируя качество
              каждого продукта.
            </p>
          </Col>
          <Col lg={5}>
            <img src={hozirda} alt="" />
          </Col>
          <Col className="product__gardin__row__coool" lg={5}>
            <img src={hozirda2} alt="" />
          </Col>
          <Col lg={7}>
            <p>
              Секрет успеха компании заключается в том, что его высшей целью
              является забота о здоровье людей, чему благоприятствует
              географическое местоположение. Плодородные, экологически чистые
              земли Ферганской области окружены Тянь-Шаньскими и
              Памиро-Алтайскими горами, омываются рекой Сырдарья, а также водами
              реки Сох, богатой золотом, серебром, кремнием и другими макро- и
              микроэлементами.
            </p>
            <p>
              {" "}
              В регионе бывает более 300 солнечных дней в году, чистый воздух,
              плодородная земля, климат — знойный степной на западе и прохладный
              влажный на юго-востоке — все это способствует получению самого
              высококачественного сырья для производства продукции.
            </p>
          </Col>
          <p>
            Компания «Mehrigiyo» специализируется на производстве
            продовольственной продукции для здравоохранения, производит
            профилактические и биологические лечебные препараты. Налажено
            выращивание тропических фруктовых деревьев, таких как папайя, годжи,
            нони, фейхоа, оливковые деревья и др, а использование целебных трав
            открывает большие возможности для новых открытий.
          </p>
        </Row>
      </div>
      <div className="product__info">
      <div className="product__info__treated">
        <h5 className="product__info__treated__hfive">
          Kompaniya turli kasalliklarni tiklash uchun tizimli yondashuvdan
          foydalanadi, bu 3 bosqichdan iborat:
        </h5>
      </div>
      <div className="product__info__dowload"></div>
      <div className="product__info__dowload__square"></div>
      <div className="product__info__dowload__square"></div>
      <div className="product__info__dowload__square"></div>
      </div>
    </div>
  );
}

export default Now;
