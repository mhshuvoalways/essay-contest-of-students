import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { isAuthenticate, logout } from "../../store/actions/userAction";
import Logo from "../../assets/images/logo.png";

export default function Navigation() {
  const dispatch = useDispatch();

  const userReducer = useSelector((store) => store.userReducer);

  useEffect(() => {
    dispatch(isAuthenticate());
  }, [dispatch]);

  return (
    <Disclosure as="nav" className="bg-pink-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <a
                  className="flex-shrink-0 flex items-center"
                  href="https://monomousumi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt=""
                  />
                  <img
                    className="hidden lg:block h-10 w-10"
                    src={Logo}
                    alt=""
                  />
                </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      DASHBOARD
                    </NavLink>
                    <NavLink
                      to="/submitarticle"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      SUBMIT ARTICLE
                    </NavLink>
                    <NavLink
                      to="/result"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      RESULT
                    </NavLink>
                    <NavLink
                      to="/award"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      AWARD
                    </NavLink>
                    <NavLink
                      to="/certificate"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      CERTIFICATE
                    </NavLink>
                    {userReducer.isAuthenticate ? (
                      <div
                        className="text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                        onClick={() => dispatch(logout())}
                      >
                        LOGOUT
                      </div>
                    ) : (
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "text-gray-50 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            : "text-gray-50 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        }
                      >
                        LOGIN
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                as="a"
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-50 bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                DASHBOARD
              </NavLink>
              <NavLink
                as="a"
                to="/submitarticle"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-50 bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                SUBMIT ARTICLE
              </NavLink>
              <NavLink
                as="a"
                to="/result"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-50 bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                RESULT
              </NavLink>
              <NavLink
                as="a"
                to="/award"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-50 bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                AWARDS
              </NavLink>
              <NavLink
                as="a"
                to="/certificate"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-50 bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-50 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                CERTIFICATE
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
