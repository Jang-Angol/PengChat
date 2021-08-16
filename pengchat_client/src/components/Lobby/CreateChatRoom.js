import React from "react";
import { Modal } from "@material-ui/core"

const createChatRoom = () => {
    return (
        <Modal>
            <div className="modalHeader">
                <button>X</button>
            </div>
            <div>
                <label>Room Name</label>
                <input/>
                <label>Max members</label>
                <input/>
                <button>Create</button>
            </div>
        </Modal>
    );
};

export default createChatRoom;