import MessageInput from "../components/MessageInput";
import Profile from "../components/Profile";
import History from "../components/History";
import { useLoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Chat = () => {
  const { user } = useLoginContext();
  const navigate = useNavigate();

  // REDIRECT IF USER TRIES A DIRECTLY ACCESS TO THE PATH OR LOGS OUT
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <div
      id="container"
      className="chat-container w-full h-full flex flex-col relative"
    >
      <Profile />
      <History />
      <MessageInput />
    </div>
  );
};

export default Chat;
