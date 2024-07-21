import React from "react";
import MaterialIcon from "material-icons-react";
import { useStore } from "../../store";
import { Button } from "./atoms";

export default () => {
    const [opened, dispatch] = useStore(state => state.dialerOpened);

    const toggleDialer = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (opened) {
            dispatch({ type: "DIALER_CLOSE" });
        } else {
            dispatch({ type: "DIALER_OPEN" });
        }
    };

    return (
        <Button opened={opened} onClick={toggleDialer}>
            {opened && <MaterialIcon icon="close" color="#FFF" size={24} />}
            {!opened && <MaterialIcon icon="call" color="#FFF" size={24} />}
        </Button>
    );
};
