import DomElement from "../element/DomElement";
export const windowDefaultStyle = {
  width: "500px",
  height: "350px",
  border: "0.5px solid rgba(0,0,0,0.2)",
  display: "flex",
  flexFlow: "column",
  position: "absolute",
  borderRadius: "10px",
  padding: "3px 0 0 0",
  background: "white",
  marginLeft: "-250px",
  marginTop: "-175px",
  top: "50%",
  left: "50%"
};
export const windowDefaultMaxStyle = {
  width: "700px",
  height: "550px",
  marginLeft: "-350px",
  marginTop: "-275px"
};
export const windowDefaultMinStyle = {
  width: "450px",
  height: "300px",
  marginLeft: "-225px",
  marginTop: "-150px"
};
export const closeBtnStyle = {
  color: "#E6605C",
  fontSize: "14px"
};
export const minBtnStyle = {
  color: "#FCBA03",
  fontSize: "14px"
};
export const maxBtnStyle = {
  color: "#00D42E",
  fontSize: "14px"
};
export const btnGroupStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  width: "70px",
  justifyContent: "space-evenly",
  height: "20px",
  lineHeight: "20px"
};
export const defaultBodyHtml = new DomElement("h2")
  .setStyle({ alignSelf: "center", textAlign: "center", flex: 1 })
  .innerHTML("...Amazing Here...")
  .toString();
export const defaultDraggableOptions = {};
export const defaultResizableOptions = {
  handles: "n, e, s, w, se, sw",
  minHeight: 300,
  minWidth: 450,
  maxHeight: 450,
  maxWidth: 600
};
