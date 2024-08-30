import React, { useState } from "react";
import { links } from "./MyLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-sm md:hidden inline">
                <FontAwesomeIcon
                  icon={
                    heading === link.name ? faChevronUp : faChevronDown
                  }
                />
              </span>
              <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FontAwesomeIcon icon={faChevronDown}/>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                      mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        {mysublinks.sublink ? (
                          <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                          </h1>
                        ) : (
                          <h1 className="text-lg font-semibold">
                            
                              <a 
                              href={mysublinks.link}>{mysublinks.Head}</a>
                            
                          </h1>
                        )}
                        {mysublinks.sublink ? (
                          mysublinks.sublink.map((slink, linkIndex) => (
                            <li key={linkIndex} className="text-sm text-gray-600 my-2.5">
            
                                <a 
                                href={slink.link}
                                className="hover:text-primary">{slink.name}</a>
                            
                            </li>
                          ))
                        ) : mysublinks.link ? (
                          <li className="text-sm text-gray-600 my-2.5">
                              <a 
                              href={mysublinks.link}
                              className="hover:text-primary">{mysublinks.name}</a>
                    
                          </li>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {/* <hr className="w-full h-px my-0 bg-gray-200 border-0 dark:bg-gray-200"></hr> */}

          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, slinkIndex) => (
              <div key={slinkIndex}>
                {slinks.sublink ? (
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="bg-gray-100 py-4 pl-5 font-semibold md:pr-0 flex justify-between items-center pr-5"
                    >
                      {slinks.Head}

                      <span className="text-sm md:mt-1 md:ml-1 inline">
                        <FontAwesomeIcon
                          icon={ 
                            subHeading === slinks.Head ? faChevronUp : faChevronDown
                          }
                        />
                      </span>
                    </h1>
                    <hr className="w-full h-px my-0 bg-gray-400 border-0 dark:bg-gray-200"></hr>

                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink, slinkSubIndex) => (
                        <li key={slinkSubIndex} className="py-3 pl-8">
                            <a
                            href={slink.link}
                            >{slink.name}</a>
                        </li>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                      className="bg-gray-100 py-4 pl-5 font-semibold md:pr-0 flex justify-between items-center pr-5"
                    >
                        <a 
                        href={slinks.link}
                        >{slinks.Head}</a>
                    </h1>
                    <hr className="w-full h-px my-0 bg-gray-400 border-0 dark:bg-gray-200"></hr>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
