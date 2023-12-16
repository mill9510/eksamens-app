import "./Galleri.css";
import Image from "next/image";

function Galleri() {
  return (
    <>
      <div class="container">
        <div class="pic1">
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic2">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic3">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic4">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic5">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic6">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="nocontent2"></div>
        <div class="nocontent1"></div>
        <div class="pic7">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="nocontent3"></div>
        <div class="pic8">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
        <div class="pic9">
          {" "}
          <Image src="/imgs/placeholder1.jpg" alt="" width={300} height={400} />
        </div>
      </div>
    </>
  );
}

export default Galleri;
