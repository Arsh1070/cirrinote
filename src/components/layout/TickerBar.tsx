import TickerItems from "@/const/ticker";

const TickerBar = () => {
  return (
    <div className="fixed top-0 left-0 z-30 hidden h-8 w-full items-center overflow-hidden bg-[#346C52] text-white md:flex">
      {TickerItems.map((ticketItem) => (
        <div
          key={ticketItem.key}
          className="animate-marquee flex text-sm whitespace-nowrap"
        >
          <img src={ticketItem.icon} alt="star" className="mx-16" />
          <p className="mx-16">{ticketItem.title1}</p>
          <img src={ticketItem.icon} alt="star" className="mx-16" />
          <p className="mx-16">{ticketItem.title2}</p>
          <img src={ticketItem.icon} alt="star" className="mx-16" />
          <p className="mx-16">{ticketItem.title3}</p>
          <img src={ticketItem.icon} alt="star" className="mx-16" />
        </div>
      ))}
    </div>
  );
};

export default TickerBar;
