import React from "react";

function Message(props) {
  
     return (
    <>
      {props.messageList.map((elem) => {
        return (
          <>
            <div
              style={{
                width: "200px",
                padding: "10px",
                backgroundColor: elem.bot ? "#FADCD9":'#FFFFFF',
                position: "relative",
                left: elem.bot?'0px':"60px",
                borderRadius: "10px",
                margin: "5px",
                marginTop: "15px",
              }}
            >
              {elem.message}
            </div>
          </>
        );
      })}
    </>
  );
}

export default Message;
