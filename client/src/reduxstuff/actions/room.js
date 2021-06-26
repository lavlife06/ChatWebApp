import { CREATE_PRICHATROOM, CREATE_ROOM, GET_MYROOMS } from "./types";
import axios from "axios";
import { getCurrentProfile } from "./profile";

// get my rooms
export const getMyRooms = (token) => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:5000/api/room/myRooms", {
            headers: {
                "x-auth-token": token,
            },
        });

        dispatch({
            type: GET_MYROOMS,
            payload: res.data,
        });
    } catch (err) {
        console.log("there is an error in getmyRooms");
    }
};

// Create room
export const createRoom = (roomName, roomMembers) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ roomName, roomMembers });

    try {
        const res = await axios.post(
            "http://localhost:5000/api/room/createroom",
            body,
            config
        );

        dispatch({
            type: CREATE_ROOM,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => {
                // dispatch(setAlert(error.msg, "danger"));
                alert(error.msg);
            });
        }
    }
};
