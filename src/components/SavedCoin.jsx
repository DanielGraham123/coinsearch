import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

function SavedCoin() {
  const [coins, setCoins] = useState([]);

  const { loggedInUser } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${loggedInUser.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [loggedInUser.email]);

  const coinPath = doc(db, "users", `${loggedInUser.email}`);
  const deleteCoin = async (coinId) => {
    try {
      const coin = coins.filter((coin) => coin.id === coinId);
      await updateDoc(coinPath, {
        watchList: arrayRemove(coin[0]),
      });
      console.log(coin);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list.
          <Link to="/">Click here to search coins</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.market_cap_rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} alt="/" className="w-8 mr-4" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>

                <td>
                  <AiOutlineClose
                    onClick={() => deleteCoin(coin.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SavedCoin;
