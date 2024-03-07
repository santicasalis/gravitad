import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { WithUs } from "../withUs/WithUs";

export default component$(() => {
  const headerNavLinks = [
    { href: "/", title: "About" },
    { href: "/", title: "Services" },
    { href: "/", title: "Case Studies" },
    { href: "/", title: "Growth Matrix" },
    { href: "/", title: "Resources" },
    { href: "/", title: "Careers" },
  ];

  return (
    <footer>
      <WithUs />
      <div class="mx-10 flex items-center justify-between">
        <img
          width="240"
          height="60"
          src="https://s3-alpha-sig.figma.com/img/6b66/1841/94c276435910958cb5d007202b5edeb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4VGyAziKIxUFomKYXnzGIb--Y43U8FWu5AZQhqY4h5MivI-YksQwrFgE2w2PzMOw7XTGoT3z8iSkkc9XI05yxRl6GJCHUt6ZsctGdrepVrGxt3f5ZyqqvhinV1R7viTRYn7L0dOIP0naRGqMPYnTceymkG6ObbTfBpESP30YJdyyofhd0x~1weBsY3WXVAaRyVkD29u0ZroUEwvLyK8JyZ-B-jAElE3TDoHfhg1~q0KzU6yggeapYywjw~oAKiy28mWQvJf0C48qGEwKac9iDI3mmkEQu1brqI2cGenpu-xqiQ27RKFtL3OZN97a2e-NbgZx3GpqcaT1kHwU7d4zg__"
          alt=""
          class="my-5"
        />
        <div class="flex items-center ">
          <div class="flex items-center space-x-4 leading-5  sm:space-x-6">
            {headerNavLinks
              // .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  class="hidden rounded-md   p-2   font-barlow text-sm  text-navFont  sm:block "
                >
                  {link.title}
                </Link>
              ))}
          </div>

          <div class="border-borderColor  flex items-center border p-3 ">
            <div class="text-sm text-navFont">Free Growth Strategies:</div>
            <img
              src="https://res.cloudinary.com/ddpmly8bf/image/upload/t_Grayscale/v1709820475/facebook_5968764_w829jt.png"
              alt=""
              class="mx-2"
            />
            <img
              src="https://res.cloudinary.com/ddpmly8bf/image/upload/t_Grayscale/v1709820493/twitter_739257_uqoims.png"
              alt=""
              class="mx-2"
              style="filter: grayscale(100%) sepia(100%) hue-rotate(240deg);"
            />
            <img
              src="https://res.cloudinary.com/ddpmly8bf/image/upload/t_Grayscale/v1709820483/linkedin_1384046_cidco8.png"
              alt=""
              class="mx-2"
              style="filter: grayscale(100%) sepia(100%) hue-rotate(240deg);"
            />
          </div>
        </div>
      </div>
      <hr style="border-color: #262626;" />
      <div class="mx-10  my-5 flex justify-between">
        <div class="flex text-sm text-navFont">
          <div class="mx-3 ">hello@neurocreativelab.com</div>
          <div class="mx-3 ">+91 91813 23 2309</div>
          <div class="mx-3 ">Germany</div>
        </div>
        <div class="text-grey text-sm">
          © 2024 Neurocreativelab. All rights reserved.
        </div>
      </div>
    </footer>
  );
});
