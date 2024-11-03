import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "./store/items";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RecentItems from "./components/RecentItems";
import SearchSection from "./components/SearchSection";
import MapSection from "./components/MapSection";
import ItemDetail from "./components/ItemDetail";
import ReportForm from "./components/ReportForm";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.itemsData);

  // Fetch items from Firebase when the app loads
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://react-7096b-default-rtdb.firebaseio.com/items.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }

        const data = await response.json();

        if (data) {
          // Convert the Firebase object format to array format
          const loadedItems = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));

          dispatch(
            itemActions.replaceCart({
              itemsData: loadedItems,
            })
          );
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []); // Empty dependency array means this runs once when component mounts

  // Update Firebase whenever items change
  useEffect(() => {
    const updateFirebase = async () => {
      try {
        const response = await fetch(
          "https://react-7096b-default-rtdb.firebaseio.com/items.json",
          {
            method: "PUT",
            body: JSON.stringify(items),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update items in Firebase");
        }
      } catch (error) {
        console.error("Error updating items:", error);
      }
    };

    // Only update Firebase if we have items
    if (items.length > 0) {
      updateFirebase();
    }
  }, [items]); // This effect runs whenever items change

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/recent-items' element={<RecentItems />} />
            <Route path='/search' element={<SearchSection />} />
            <Route path='/map' element={<MapSection />} />
            <Route path='/item/:id' element={<ItemDetail />} />
            <Route path='/report' element={<ReportForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
