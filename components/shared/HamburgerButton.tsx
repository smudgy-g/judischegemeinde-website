const HamburgerButton = ({
  active,
  handleClick,
}: {
  active: boolean
  handleClick: () => void
}) => {
  return (
    <button
      className={`hamburger hamburger--spin ${active && 'is-active'} md:hidden flex z-[100]`}
      onClick={handleClick}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

export default HamburgerButton
