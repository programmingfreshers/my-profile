import React, { useState } from "react";
import Message from "./Message";
import controller from "./controller";
function Chatbot() {
  const chatWindowHeight = 450;
  const chatWindowWidth = 350;
  const initialWindow = {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    height: "50px",
    width: "50px",
    border: "solid black 2px",
    borderRadius: "10px",
  };
  const chatWindow = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    height: `${chatWindowHeight}px`,
    width: `${chatWindowWidth}px`,
    backgroundColor: "white",
    border: "solid black 2px",
    borderRadius: "10px",
  };

  const [floatingMessage, setfloatingMessage] = useState([
    "date",
    "time",
    "personal",
  ]);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([
    {
      message: "hello, how may i help you",
      bot: true,
    },
  ]);
  const [state, setState] = useState(initialWindow);

  const postMessage = () => {
    if (message != "") {
      var ls = [];
      messageList.map((elem) => {
        ls.push(elem);
      });
      ls.push({
        message: message,
        bot: false,
      });

      setMessageList(ls);
    }
  };
  const sendBotMessage = (botMessage) => {
    var ls = [];
    messageList.map((elem) => {
      ls.push(elem);
    });
    ls.push({
      message: botMessage,
      bot: true,
    });

    setMessageList(ls);
  };
  const saveMessage = (event) => {
    var msg = event.target.value;
    setMessage(msg);
  };

  const openChat = () => {
    if (status === false) {
      setStatus(true);
      setState(chatWindow);
    }
  };
  const closeChat = () => {
    if (status === true) {
      setStatus(false);
      setState(initialWindow);
    }
  };
  const selectedMessage = (event) => {
    if (event.target.value != null) {
      var lss = [];
      messageList.map((elem) => {
        lss.push(elem);
      });
      lss.push({
        message: event.target.value,
        bot: false,
      });
      setMessageList(lss);
    }

    if (event.target.value === "date") {
      sendBotMessage(controller.getDate());
    } else if (event.target.value === "time") {
      sendBotMessage('time');
    } else if (event.target.value === "Account details") {
      sendBotMessage("Account no : " + controller.getAccountNumber());
    }else if (event.target.value === "name") {
      sendBotMessage("Holder's name :" + controller.getName());
    } else if (event.target.value === "personal") {
      var newFloatingMessages = ["Account details", "name", "general"];
      setfloatingMessage(newFloatingMessages);
    } else if (event.target.value === "general") {
      var newFloatingMessages = ["time", "date", "personal"];
      setfloatingMessage(newFloatingMessages);
    }
  };

  return (
    <>
      <div onClick={openChat} style={state}>
        {status ? (
          <div>
            <div
              style={{
                textAlign: "center",
                height: "50px",
                width: "100%",
                backgroundColor: "#F8AFA6",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-between">
                <strong>ChatBot </strong>
                <button
                  onClick={closeChat}
                  style={{
                    right: "0px",
                    position: "absolute",
                    borderRadius: "10px",
                    backgroundColor: "#F79489",
                    border: "magenta solid 1px",
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <strong>X</strong>
                </button>
              </div>
            </div>

            <div
              style={{
                height: "350px",
                width: "100%",
                backgroundColor: "#F9F1F0",
                msOverflowStyle: "none",
                overflow: "auto",
                overflowX: "hidden",
              }}
            >
              <Message messageList={messageList} />

              {floatingMessage.map((elem) => {
                return (
                  <div
                    class="btn-group p-2"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      className="btn btn-#F9F1F0"
                      style={{
                        position: "relative",
                        left: "60px",
                        border: "magenta solid 2px",
                      }}
                      onClick={selectedMessage}
                      value={elem}
                    >
                      {elem}
                    </button>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                height: "50px",
                width: "100%",
              }}
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={saveMessage}
                />
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                  onClick={postMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Chatbot;
