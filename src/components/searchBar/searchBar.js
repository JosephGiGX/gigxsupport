import React, { useState } from "react"
import SearchIcon from "../../assets/images/search.svg"

import styles from "./searchbar.module.css"

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    onFormSubmit(term)
  }

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className={styles.formStyle}>
        <img src={SearchIcon} alt="" />
        <input
          className={styles.inputField}
          type="text"
          placeholder="What can we help you with?"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
