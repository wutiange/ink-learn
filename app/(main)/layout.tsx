

async function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex w-full flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300 md:px-12 md:pr-6">
      {children}
    </div>
  )
}

export default MainLayout