import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav/Nav";
import SideNav from "../Components/SideNav/SideNav";
import SearchBar from "../Components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import CompanyCard from "../Components/CompanyCard/CompanyCard";
import AdCard from "../Components/AdCard/AdCard";
import CompanyDetails from "../Components/CompanyDetails/CompanyDetails";
import Filter from "../Components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { clearState, setLoading } from "../state/filter/filter-slice";

function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});
  const filteredData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSelectedCompany = (company) => {
    setSelectedCompany(company);
  };
  const handleToggle = async () => {
    console.log(showFilter);
    setShowFilter(!showFilter)
  };
  const inputSearch = async (req,res) =>{
    dispatch(setLoading(true))
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'company/getcompanybyname/'+ filteredData.searchValue,{
      method:'GET',
    })
    const data = await response.json();
    console.log(data)
    setCompanies(data.company);
    dispatch(clearState());
  }

  useEffect(() => {
    const getAllCompanies = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "company/",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCompanies(data.companies);
      console.log("hi");
      setSelectedCompany(companies[0]);
    };

    getAllCompanies();
  }, []);

  const handleApplyFilter = async (req, res) => {
    dispatch(setLoading(true));
    console.log(filteredData)
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "company/filter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          position: filteredData.categories,
          skills: filteredData.skills,
          minDuration:filteredData.minDuration,
          maxDuration:filteredData.maxDuration,
        }),
      })
      const data = await response.json();
      console.log(data);
      setCompanies(data.data);
      setShowFilter(false);
      dispatch(setLoading(false))
      dispatch(clearState())
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={styles.SearchContainer}>
        <SideNav />
        <SearchBar handleClick={handleToggle} handleInputSearch={inputSearch}/>
      </div>
      <div className={styles.SearchContainer}>
        <div className={styles.leftNav}>
          {companies.length > 0 && (
            <CompanyCard
              company={companies[0]}
              handleClick={() => {
                handleSelectedCompany(companies[0]);
              }}
            />
          )}
          <AdCard />
          {companies && companies.length > 1 ? (
            companies.slice(1).map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                handleClick={() => {
                  handleSelectedCompany(company);
                }}
              />
            ))
          ) : (
            <p>No more companies available.</p>
          )}

        </div>
          <div className={styles.filterComponent}>
            {showFilter && <Filter handleClick={handleToggle} handleFilterBtn={handleApplyFilter}/>}
          </div>
        {selectedCompany && <CompanyDetails company={selectedCompany} />}
      </div>
    </div>
  );
}

export default Home;
