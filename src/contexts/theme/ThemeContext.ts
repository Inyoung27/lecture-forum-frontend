// 저장소 생성
import { createContext } from "react";

export type ThemeType = "light" | "dark";
// 값을 바꿀 수 있는 기능 저장
export type ThemeContextType = {
    theme: ThemeType;
    onChangeTheme: VoidFunction;    // () => void 매개변수, 리턴 없음
}

export const ThemeContext = createContext<ThemeContextType | null>(null);