import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Hidden,
} from "@mui/material";
import UX_Pet from "../../assets/image/UX_Pet.png";
import UX_Logo from "../../assets/image/UX_Logo.png";
import UX_Motion from "../../assets/image/UX_Motion.png";
import UX_Video from "../../assets/image/UX_Video.png";
import { NavLink } from "react-router-dom";
import ReactHover, { Trigger, Hover } from "react-hover";
import { Mask } from "../Common/Base/Base";

const optionsCursorTrueWithMargin = {
  followCursor: false,
  shiftX: 0,
  shiftY: 0,
};
export function WorkCard(props) {
  const { title1, title2, detail, img, nav, backgroundColor } = props;
  return (
    <Card
      variant="outlined"
      sx={{ width: 362, backgroundColor: { backgroundColor }, border: "none" }}
    >
      <CardContent style={{ marginLeft: 4 }}>
        <Typography
          sx={{ fontSize: 12, fontWeight: 300 }}
          color="text.secondary"
          gutterBottom
        >
          {title1}
        </Typography>
        <NavLink to={`/work/${nav}`}>
          <Typography
            style={{ marginTop: 5 }}
            sx={{ fontSize: 24, fontWeight: 700 }}
            component="div"
          >
            {title2}
          </Typography>
        </NavLink>
        <Typography
          style={{ marginTop: 5 }}
          sx={{ fontSize: 14, lineHeight: "150%" }}
        >
          {detail}
        </Typography>
      </CardContent>
      <NavLink to={`/work/${nav}`}>
        <div
          style={{
            position: "relative",
            margin: "5px 20px",
            borderRadius: "10px ",
            overflow: "hidden",
            boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <ReactHover options={optionsCursorTrueWithMargin}>
            <Trigger type="trigger">
              <CardMedia
                component="img"
                height="240"
                width="362"
                image={img}
                alt=""
              />
            </Trigger>
            <Hover type="hover">
              <NavLink to="/work/video">
                <Mask
                  style={{
                    width: 322,
                    height: 240,
                    top: -240,
                    borderRadius: 0,
                  }}
                ></Mask>
              </NavLink>
            </Hover>
          </ReactHover>
        </div>
      </NavLink>
    </Card>
  );
}
export default function Work() {
  return (
    <div className="work">
      <div style={{ height: 460, paddingTop: 150 }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 50,
          }}
        >
          ???? Hi, Boya here!
        </h2>
        <p
          style={{
            width: 450,
            height: 144,
            margin: "auto",
            lineHeight: "150%",
            textAlign: "center",
            marginBottom: 200,
          }}
        >
          I am a designer who work on UX design, graphic design and motion
          graphic design. I graduated from Monash University with a degree of
          Multimedia Design. I am looking for full-time opportunities in 2022.
        </p>
      </div>
      <div
        style={{ backgroundColor: "#E5E5E5", height: 1100, padding: "0 200px" }}
      >
        <div style={{ display: "flex", padding: "50px 0" }}>
          <div style={{ flex: 1 }}></div>
          <WorkCard
            title1="01 - UX DESIGN"
            title2="Pet Food Delivery App"
            detail=" A mobile app that allows users to schedule the products delivery time."
            img={UX_Pet}
            nav="ux"
            backgroundColor="transparent"
          />
          <div style={{ width: 50 }}></div>
          <WorkCard
            title1="02 - LOGO DESIGN"
            title2="Big Bowl"
            detail=" A brand upgrade project for a local fast-food restaurant."
            img={UX_Logo}
            nav="logo"
            backgroundColor="transparent"
          />
          <div style={{ flex: 1 }}></div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>
          <WorkCard
            title1="03 - MOTION GRAPHICS DESIGN"
            title2="Popcorn Movie Review"
            detail="An opening title designed for Student TV (conceptual)."
            img={UX_Motion}
            nav="motion"
            backgroundColor="transparent"
          />
          <div style={{ width: 50 }}></div>
          <WorkCard
            title1="04 - VEDIO EDITING"
            title2="Daydreamer"
            detail="A seven-minute short film that tells the psychological journey of a girl."
            img={UX_Video}
            nav="video"
            backgroundColor="transparent"
          />
          <div style={{ flex: 1 }}></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
