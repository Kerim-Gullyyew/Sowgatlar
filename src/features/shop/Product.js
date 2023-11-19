import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { backendUrl } from "../../rootUrl";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToWishlist } from "../../store/features/wishlist/wishlistSlice";
const Product = ({ products }) => {
  const lang = localStorage.getItem("userLanguage");
  const { cartItems } = useSelector((state) => state?.cart);
  const { wishlistItems } = useSelector((state) => state?.wishlist);
  const dispatch = useDispatch();
  function AddToWish(e, nproduct) {
    e.preventDefault();
    dispatch(addToWishlist(nproduct));
  }
  return (
    <>
      {products?.map((nproduct, key) => (
        <div
          key={key}
          className="bg-white shadow-lg rounded-lg overflow-hidden group"
        >
          <Link to={"/product/" + nproduct.id}>
            <div className="group h-full relative rounded-lg">
              <img
                alt={lang === "tm" ? nproduct?.title : nproduct?.title_ru}
                src={backendUrl + nproduct?.main_image}
                className="absolute inset-0 w-full object-cover transition-opacity group-hover:opacity-50"
              />
              <div className="absolute inset-x-0 bottom-0 text-center text-lg font-extrabold group-hover:invisible text-primary">
                {nproduct?.get_newprice} {lang === "tm" ? "m" : "м"}
              </div>

              <div className="relative text-center items-center p-10 lg:p-6 xl:px-5 space-y-10 hover:bg-primary hover:bg-opacity-70 h-full ">
                <div className=" pt-20 xl:pt-32">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-sm text-white items-center text-center justify-center flex">
                      {lang === "tm" ? nproduct?.title : nproduct?.title_ru}
                    </div>

                    <div className="flex pt-10 justify-between">
                      {wishlistItems?.find((el) => el?.id === nproduct?.id) ? (
                        <FontAwesomeIcon
                          onClick={(e) => {
                            AddToWish(e, nproduct);
                          }}
                          icon={faHeart}
                          bounce
                          size="xl"
                          className="stroke-black cursor-pointer stroke-2 hover:stroke-red-700 text-red-700"
                        />
                      ) : (
                        <FontAwesomeIcon
                          onClick={(e) => {
                            AddToWish(e, nproduct);
                          }}
                          icon={faHeart}
                          bounce
                          size="xl"
                          className="stroke-black cursor-pointer stroke-2 hover:stroke-red-700 text-white"
                        />
                      )}
                      <div className="text-lg font-extrabold text-white">
                        {nproduct?.get_newprice} {lang === "tm" ? "m" : "м"}
                      </div>
                      {cartItems.find((el) => el?.id === nproduct?.id) ? (
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          bounce
                          size="xl"
                          className="stroke-black  cursor-pointer stroke-2 hover:stroke-red-700 text-red-700"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          bounce
                          size="xl"
                          className="stroke-black cursor-pointer stroke-2 hover:stroke-red-700 text-white"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
