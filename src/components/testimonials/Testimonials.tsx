import { component$ } from "@builder.io/qwik";

export const Testimonials = component$(() => {
  return (
    <>
      <div
        class="text-violetLigth p-10"
        style="background: linear-gradient(180deg, #29163E 70%, #1A1A1A 100%);"
      >
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div class="flex flex-col">
            <p class="text-navFont">What our customers say about us</p>
            <h3 class="text-violetLigth">
              A Partnership Built on Trust & Results
            </h3>
            <p>
              Our partners stay on average 2+ years with us. No one can match
              our success rate
            </p>
          </div>

          <img src="" alt="" srcset="" />
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div class="border-borderColor flex flex-col border  p-8">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              SquareUp has been Instrumental in Transforming our Online
              Presence.{" "}
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              Their team's expertise in web development and design resulted in a
              visually stunning and user-friendly e-commerce platform. Our
              online sales have skyrocketed, and we couldn't be happier.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/ee37/1610/fc27e5b342678e8904c0f9f3ffdb8566?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrDc2wsOqelD3pPhCFFsHezZB1FX4pYX4NeXIJXEoerQvKapeujPcKp0z8dBFPWWD5kNxOcm6ebwGzjJsSNDzcLueD8PG7knY0P4AGh8NqMmFMlAYxg2hl6hK929lBZYb5SO4iq0AKylSQUSnvmWhgwBM5fl2B7mpdnyFDM00AYaaai8UOdoLQuCSSY7zQBuyAO9rlbBoy0jwfgWQnKE3Rk6lZf7MXj7c4G0O~iFz5ZLtjImXQdaCW-icyOykrZhTQtp~5-Qz-GiYxbltNZqv~Ln0il~NhAFVy5GHw3Q3IEmTkZoRlO1lTv9KZq9Jx-dtN24~ZlkbdcUTe8z-0lu4g__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>John Smith</div>
                  <div>CEO of Chic Boutique</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8">
            <h4 class="text-28 mt-5 font-medium leading-8">
              Working with SquareUp was a breeze.
              <br />
            </h4>
            <p class="text-15 mb-10 leading-5 text-navFont">
              They understood our vision for a mobile app that streamlined our
              food delivery service. The app they delivered exceeded our
              expectations, and our customers love the seamless ordering
              experience. SquareUp is a trusted partner we highly recommend.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/13ed/f82b/a436cc2c3eb4d7e4159495ca442ec5cc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i0W2Ck-fXHlt7mD1ETweXZ3USJusnGykkNu6o8WTX1ydpYSyFLBcJpZCDp9cZLVwhutNjkbceq5WtGAtoRpxpxWh5IZiUnPUysiMcktjRbTtjNyMH9w6BE2A~U8Y37tSZkuOhwhLgg8fR32qC3AXuijb7~QFjb~ZpSK96C5Rddmpt1b8fcb7gQrlBkToU4R7xVNtLgACc3MB2ebO5i4HiPM~dgP7K6U6A177O2LZwZAp3VjQ-nb34G8PPE67YQHAZWrIpacu0U03-egbqgBhA0It1WR5zluU7O6KSvSK2oSUhFThgim~krctPzn26bwgnprPg815-jS~6m9CeiaoyA__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Sarah Johnson</div>
                  <div>Founder of HungryBites.</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              SquareUp developed a comprehensive booking and reservation system
              for our event management company
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              Their attention to detail and commitment to delivering a
              user-friendly platform was evident throughout the project. The
              system has streamlined our operations and enhanced our clients'
              event experiences.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/a151/ae71/91280caf2dc2f20ce3f49a6974743500?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqeZDapEvVnfI0abXHDBiDjkI5kD9B491SQQiuqFyBViTeBvBq34UAnB8d2SKCtRm3FWbxyIY35K95Wyvp7aXbdve9MS1H6oVUDbXEHZcHTkmXB0PO1gXtwjFNF2qBeb83YdS8UirCXQKl4pwm-hdpgwOJCwiAin3Gq6-NP4Yv0zLeCmEGYbqPqhz32KG1qWw-0wBd4IgiCLcZprVY6vuM0rYbXZ8VJi6GeWI-WOslx6KoPN4Jo~j20TEt8xfgq4WRvgrzO5cLPAMS7RyfRqkvYlu9JAZ8jDHDf2bDJ9qxL~ItGMUoRD1evFuXuebzJ602XbJHPLSLZMMeFLMgHroQ__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Mark Thompson</div>
                  <div>CEO of EventMasters</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
          <div class="border-borderColor flex flex-col border  p-8">
            <h4 class="text-28 mb-2 mt-5 font-medium leading-8">
              ProTech Solutions turned to SquareUp to automate our workflow
            </h4>
            <p class="text-15 mb-12 leading-5 text-navFont">
              They delivered an exceptional custom software solution. The system
              has significantly increased our productivity and reduced manual
              errors. SquareUp's expertise and professionalism have made them a
              trusted technology partner.
            </p>
            <div class="flex justify-between">
              <div class="border-borderColor flex items-center  border">
                <img
                  width="60"
                  height="60"
                  src="https://s3-alpha-sig.figma.com/img/a24d/0752/f02044c9083554ecaa5e03e61b43451b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP0J~wjoEyJEIdX7UV0MHaVJr0DS0YzigAkVacUZ4VqtHb2CYzmB3b8Raq8~bLpTUWm76Jp6Ej7MCDdHAaDnYBdeg3GSkKcRUOyQiqhyAiW4snEw7fsrvITvjMTh6PLX7VAguiL-hW6OhMmQBZUAip0AhQhs0yJKyNwHrGfBgFlcZmC14pGDueO7K-~PJo8goZd489ZM4X2Dl97Wa5DoeStLfqgyaHMbWvT5ouwn8Nwu9Wku2k49zdlS4mE-msz2Hv7cci5iaWoFkQs3yTMMa4C-O513yFgkxUxYKGMf~lPdmY6PQvzWVvTaCgDJ1fkDq4yi1D0W175Q4et3nsseqA__"
                  alt=""
                  class="mr-3"
                  style="filter: grayscale(100%);"
                />

                <div class=" mr-6 text-navFont">
                  <div>Laura Adams</div>
                  <div>COO of ProTech Solutions.</div>
                </div>
              </div>
              <button class=" rounded-md bg-orangeFont px-5 py-3 text-navFont">
                Open Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
