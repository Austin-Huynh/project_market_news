"use client";
import Image from "next/image";

export default function Article(props) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        padding: "16px",
        background: "white",
        boxShadow: "0px 30px 60px rgba(32, 56, 85, 0.15)",
        borderRadius: "16px",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "16px",
        display: "inline-flex",
      }}
    >
      <img
        style={{
          width: 380,
          alignSelf: "stretch",
          background: "linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)",
          borderRadius: 16,
        }}
        alt="Article Image"
        src={props.image_url}
      />
      <div
        style={{
          flex: "1 1 0",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "16px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: "196px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "16px",
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#333333",
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            {props.title}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              color: "#98A0A2",
              fontSize: "12px",
              fontFamily: "Muli",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {props.description}
            <br />
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#98A0A2",
                fontSize: "11px",
                fontFamily: "Muli",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              {formatDate(props.published_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
