import ActionCard from "./action-card";

function Actions() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-20 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <ActionCard
          image="/Banner holder.png"
          title="Promotion"
          subtitle="Promote your NFT or Collection here."
          emailTo="dannyalexandri@gmail.com"
          subject=" NFT Collection promotion"
          body={`Hello,\n I would like to make advertise my NFT on your platform.`}
        />
        <ActionCard
          image="/Image_fx-304 1.png"
          title="Feature Your Collection"
          subtitle="Submit a project you believe in."
          emailTo="dannyalexandri@gmail.com"
          subject="Feature"
          body={`Hello,\n  I would like to get an NFT artist for my upcoming project.`}
        />
      </div>
    </section>
  );
}

export default Actions;
