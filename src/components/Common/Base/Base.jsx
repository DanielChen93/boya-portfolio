import { fontWeight, styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { hover } from "@testing-library/user-event/dist/hover";
export const Root = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
});
export const HorizontalFlex = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const VerticalFlex = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const MainTitle = styled("div")({
  marginTop: 110,
  fontSize: 24,
  fontWeight: 700,
});
export const SubTitle = styled("div")({
  marginTop: 100,
  marginBottom: 50,
  fontWeight: 700,
  fontSize: 20,
});
export const SubText = styled("div")({
  width: 750,
  textAlign: "center",
});

export const MyButton = styled("a")({
  fontWeight: 700,
  fontSize: 16,
  backgroundColor: "#E9168C",
  padding: "7px 45px",
  transition: "all 150ms ease",
  color: "white",
  cursor: "pointer",
  borderRadius: 8,
  border: "none",
  "&:hover": {
    backgroundColor: "#FE7BC4",
  },
  "&.active": {
    backgroundColor: "#FE7BC4",
  },
});

export const HoverSpan = styled("span")({
  "&:hover": {
    borderBottom: "1px solid #E9168C",
    color: "#E9168C",
  },
});

export const HoverSpanNoUnderline = styled("span")({
  "&:hover": {
    color: "#E9168C",
  },
});

export const AnimatedSpan = styled("span")({
  position: "relative",
  display: "inline-block",
  transition: "all 0.3s ease-out",
  "&:hover span": {
    width: "100%",
  },
});

export const Slider = styled("span")({
  position: "absolute",
  display: "block",
  left: 0,
  top: "100%",
  margin: "0 auto",
  height: "2px",
  backgroundColor: "#000",
  width: "0%",
  transition: "width 0.3s ease",
});

export const HoverImgMask = styled("img")({
  position: "absolute",
  top: 0,
  right: 0,
  "&:hover span": {
    top: 10,
  },
});

export const Mask = styled("div")({
  position: "absolute",
  top: -315,
  left: 0,
  width: 260,
  height: 315,
  zIndex: 2,
  backgroundColor: "rgba(82, 82, 82, 0.54)",
  borderRadius: "0 0 8px 8px ",
});
