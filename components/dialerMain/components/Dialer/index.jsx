import React from "react";
import { useStore } from "../../store";
import { Box, Button, Input, ButtonsContainer, CallButton } from "./atoms";

export default (props) => {
    const [number, setNumber] = React.useState("");
    const [state, dispatch] = useStore();
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

    // ComponentDidMount & ComponentWillUnmount
    React.useEffect(() => {
        document.addEventListener("click", onOuterClick);

        return () => document.removeEventListener("click", onOuterClick);
    });

    const onOuterClick = () => {
        dispatch({ type: "DIALER_CLOSE" });
    };

    const onDialerClick = e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };

    return (
        <Box opened={state.dialerOpened} onClick={onDialerClick}>
            <Input
                placeholder="SIP URI"
                value={number}
                onChange={(event) => {
                    props.userSetRequestUri(event.target.value);
                    setNumber(event.target.value);
                }
                }
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        ev.preventDefault();
                        props.userSipCaller.invite(number);
                    }
                }}
            />

            <ButtonsContainer>
                {buttons.map(char => (
                    <Button variant='contained'
                        color='primary' key={char} onClick={() => setNumber(number + char)}>
                        {char}
                    </Button>
                ))}
            </ButtonsContainer>

            <CallButton onClick={() => {
                props.userSipCaller.invite(number)
                dispatch({ type: "DIALER_CLOSE" });
            }}>Call</CallButton>
        </Box>
    );
};
