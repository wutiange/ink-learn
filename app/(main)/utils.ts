import menus, { Menu } from "../menus"

export function findMenusByPathname(pathname: string) {
  const find = (items: Menu[]): Menu | undefined => {
    for (const item of items) {
      if (item.url === pathname) {
        return item
      }
      if (item.items) {
        const result = find(item.items)
        if (result) {
          return result
        }
      }
    }
  }
  const menu = find(menus)
  return menu
}