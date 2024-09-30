import { DrawerSidebar } from "./drawer-sidebar"
import { ToggleTheme } from "./toggle-theme"

export const Header = () => {
  return (
    <header className="p-4 border-b border-border flex justify-between items-center">
      <DrawerSidebar />
      <ToggleTheme />
    </header>
  )
}