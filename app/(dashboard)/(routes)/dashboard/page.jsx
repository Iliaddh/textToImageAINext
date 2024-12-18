"use client";
import React from "react";
import { useAppContext } from "@/context/page";
import FormField from "../../../(components)/FormField";
import Card from "../../../(components)/Card";
import { useEffect, useState } from "react";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const {
    searchText,
    setSearchText,
    searchTimeout,
    setSearchTimeout,
    setSearchedResults,
    searchedResults,
    allPosts,
    setAllPosts,
  } = useAppContext();

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => { 

      try {
        const response = await fetch("/api/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        if (result.data != null) {
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) =>
          item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 300)
    );
  };

  return (
    <div className="h-lvh">
      
      <section className=" h-full">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Gallery</h1>
        </div>

        <div className="mt-16">
          <FormField
            labelName="Search posts"
            type="text"
            name="text"
            placeholder="Search posts"
            value={searchText}
            handleChange={handleSearchChange}
          />
        </div>

        <div className="mt-20 flex justify-center">
          {loading ? (
            <span  className="loading mt-20 loading-spinner text-success"></span>
          ) : (
            <>
            
              {searchText && (
                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                  Showing Resuls for
                  <span className="text-[#222328]">{searchText}</span>:
                </h2>
              )}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mb-10">
                
                {searchText ? (
                  <RenderCards
                    data={searchedResults}
                    title="No Search Results Found"
                  />
                ) : (
                  <RenderCards data={allPosts}  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
