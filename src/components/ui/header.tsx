import { DrawerSidebar } from "./drawer-sidebar"
import { ToggleLanguage } from "./toggle-language"
import { ToggleTheme } from "./toggle-theme"

export const Header = () => {
  return (
    <header className="p-4 border-b border-border flex justify-between items-center">
      <DrawerSidebar />

      <div className="flex items-center gap-2">
        <ToggleLanguage />
        <ToggleTheme />

      </div>
    </header>
  )
}