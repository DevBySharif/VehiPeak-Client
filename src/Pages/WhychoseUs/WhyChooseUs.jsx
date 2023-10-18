import { FaCertificate, FaGlassCheers, FaMoneyBillWave } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-36 mb-16">
      <h1 className="text-5xl font-extrabold text-center">Why Choose Us ?</h1>
      <div className="mg:flex-col lg:flex  justify-between gap-16">
        <div className="space-y-5 text-center">
          <div className="m-4 text-4xl text-orange-500 flex justify-center">
            <FaCertificate></FaCertificate>
          </div>
          <h1 className="text-4xl font-semibold">Wide range of brands</h1>
          <p>
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
        <div className="space-y-5 text-center">
          <div className="m-4 text-4xl text-lime-500 flex justify-center">
            <FaGlassCheers></FaGlassCheers>
          </div>
          <h1 className="text-4xl font-semibold">Trusted by our clients</h1>
          <p>
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
        <div className="space-y-5 text-center">
          <div className="m-4 text-4xl text-blue-500 flex justify-center">
            <FaMoneyBillWave></FaMoneyBillWave>
          </div>
          <h1 className="text-4xl font-semibold">Fast & easy financing</h1>
          <p>
            We can help with your financing plan, we can offer some tips and
            tricks. Drive off with this dream car of yours regardless of your
            credit history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
