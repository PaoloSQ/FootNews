import React from 'react'
import styles from './SearchResults.module.scss'

const SearchResults = ({ sections }) => {
  return (
    <div
      className={`${styles.searchResultsContainer} d-flex flex-column px-3 py-2`}>
      {sections.map(
        (section, index) =>
          section.length > 0 && (
            <div
              key={`section-${index}`}
              className={`${styles.section} d-flex flex-column my-2`}>
              <h5 className={styles.sectionTitle}>Resultados {index + 1}</h5>

              <ul className={`${styles.resultList} py-2 px-0 m-0`}>
                {section.map((result) => (
                  <li
                    key={result.result}
                    className={`${styles.resultItem} d-flex align-items-center p-2`}>
                    <img
                      src={result.imageUrl}
                      alt={result.result}
                      className={styles.resultImage}
                    />
                    <span className={styles.resultText}>{result.result}</span>
                  </li>
                ))}
              </ul>

              {index < sections.length - 1 &&
                sections.some((s) => s.length > 0) && <hr className='my-2' />}
            </div>
          ),
      )}
    </div>
  )
}

export default SearchResults
