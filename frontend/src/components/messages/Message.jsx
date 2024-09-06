import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
    const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilepic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilepic} /> 
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}>{message.message}</div>
                <div className="chat-footer text-gray-200 opacity-50">{formattedTime}</div>
            </div>
        </div>
    )
}

export default Message
