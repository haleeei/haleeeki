import { useRef } from "react";
import click from "../assets/audio/Retro8.mp3";

export function usePlayClickSound() {
    const clickSoundRef = useRef(new Audio(click));

    const playClick = () => {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(() => {});
    };

    return playClick;
}