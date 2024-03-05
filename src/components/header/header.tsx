import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MobileNav } from "./movileNav";



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
      <header class="flex  justify-between items-center m-8">
        <div>
          <Link href="/" >
            <div class="flex items-center justify-between">
              <div class="mr-3">
                <img width="233" height="24" 
                  
                  src="https://s3-alpha-sig.figma.com/img/6b66/1841/94c276435910958cb5d007202b5edeb3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a4VGyAziKIxUFomKYXnzGIb--Y43U8FWu5AZQhqY4h5MivI-YksQwrFgE2w2PzMOw7XTGoT3z8iSkkc9XI05yxRl6GJCHUt6ZsctGdrepVrGxt3f5ZyqqvhinV1R7viTRYn7L0dOIP0naRGqMPYnTceymkG6ObbTfBpESP30YJdyyofhd0x~1weBsY3WXVAaRyVkD29u0ZroUEwvLyK8JyZ-B-jAElE3TDoHfhg1~q0KzU6yggeapYywjw~oAKiy28mWQvJf0C48qGEwKac9iDI3mmkEQu1brqI2cGenpu-xqiQ27RKFtL3OZN97a2e-NbgZx3GpqcaT1kHwU7d4zg__"
                  alt=""
                  class="object-cover"
                />
              </div>
            </div>
          </Link>
        </div>
        <div class="flex items-center space-x-4 leading-5  sm:space-x-6">
          {headerNavLinks
            // .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                class="hidden rounded-md   p-2   text-sm font-barlow  text-navFont  sm:block "
              >
                {link.title}
              </Link>
            ))}
      
        </div>
        <div><button class="bg-orange  text-orangeFont font-barlow p-3 rounded-2xl gap-2  text-base leading-6 hidden sm:block"> Get in Touch</button>
        <MobileNav />
        </div>
      </header>
    );
  });
  

