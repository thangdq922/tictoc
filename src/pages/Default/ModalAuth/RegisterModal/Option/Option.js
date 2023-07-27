import styles from './Option.module.css'

function Option({ type }) {
    switch (type) {
        case 'Day':
            return (
                <>
                    <option id="Day-options-item-0" aria-selected="false" className={styles.divOption}>1</option>
                    <option id="Day-options-item-1" aria-selected="false" className={styles.divOption}>2</option>
                    <option id="Day-options-item-2" aria-selected="false" className={styles.divOption}>3</option>
                    <option id="Day-options-item-3" aria-selected="false" className={styles.divOption}>4</option>
                    <option id="Day-options-item-4" aria-selected="false" className={styles.divOption}>5</option>
                    <option id="Day-options-item-5" aria-selected="false" className={styles.divOption}>6</option>
                    <option id="Day-options-item-6" aria-selected="false" className={styles.divOption}>7</option>
                    <option id="Day-options-item-7" aria-selected="false" className={styles.divOption}>8</option>
                    <option id="Day-options-item-8" aria-selected="false" className={styles.divOption}>9</option>
                    <option id="Day-options-item-9" aria-selected="false" className={styles.divOption}>10</option>
                    <option id="Day-options-item-10" aria-selected="false" className={styles.divOption}>11</option>
                    <option id="Day-options-item-11" aria-selected="false" className={styles.divOption}>12</option>
                    <option id="Day-options-item-12" aria-selected="false" className={styles.divOption}>13</option>
                    <option id="Day-options-item-13" aria-selected="false" className={styles.divOption}>14</option>
                    <option id="Day-options-item-14" aria-selected="false" className={styles.divOption}>15</option>
                    <option id="Day-options-item-15" aria-selected="false" className={styles.divOption}>16</option>
                    <option id="Day-options-item-16" aria-selected="false" className={styles.divOption}>17</option>
                    <option id="Day-options-item-17" aria-selected="false" className={styles.divOption}>18</option>
                    <option id="Day-options-item-18" aria-selected="false" className={styles.divOption}>19</option>
                    <option id="Day-options-item-19" aria-selected="false" className={styles.divOption}>20</option>
                    <option id="Day-options-item-20" aria-selected="false" className={styles.divOption}>21</option>
                    <option id="Day-options-item-21" aria-selected="false" className={styles.divOption}>22</option>
                    <option id="Day-options-item-22" aria-selected="false" className={styles.divOption}>23</option>
                    <option id="Day-options-item-23" aria-selected="false" className={styles.divOption}>24</option>
                    <option id="Day-options-item-24" aria-selected="false" className={styles.divOption}>25</option>
                    <option id="Day-options-item-25" aria-selected="false" className={styles.divOption}>26</option>
                    <option id="Day-options-item-26" aria-selected="false" className={styles.divOption}>27</option>
                    <option id="Day-options-item-27" aria-selected="false" className={styles.divOption}>28</option>
                    <option id="Day-options-item-28" aria-selected="false" className={styles.divOption}>29</option>
                    <option id="Day-options-item-29" aria-selected="false" className={styles.divOption}>30</option>
                    <option id="Day-options-item-30" aria-selected="false" className={styles.divOption}>31</option>
                </>
            )
        case 'Month':
            return (
                <>
                    <option id="Month-options-item-0" aria-selected="false" className={styles.divOption}>January</option>
                    <option id="Month-options-item-1" aria-selected="false" className={styles.divOption}>February</option>
                    <option id="Month-options-item-2" aria-selected="false" className={styles.divOption}>March</option>
                    <option id="Month-options-item-3" aria-selected="false" className={styles.divOption}>April</option>
                    <option id="Month-options-item-4" aria-selected="false" className={styles.divOption}>May</option>
                    <option id="Month-options-item-5" aria-selected="false" className={styles.divOption}>June</option>
                    <option id="Month-options-item-6" aria-selected="false" className={styles.divOption}>July</option>
                    <option id="Month-options-item-7" aria-selected="false" className={styles.divOption}>August</option>
                    <option id="Month-options-item-8" aria-selected="false" className={styles.divOption}>September</option>
                    <option id="Month-options-item-9" aria-selected="false" className={styles.divOption}>October</option>
                    <option id="Month-options-item-10" aria-selected="false" className={styles.divOption}>November</option>
                    <option id="Month-options-item-11" aria-selected="false" className={styles.divOption}>December</option>
                </>
            )
        case 'Year':
            return (
                <>
                    <option id="Year-options-item-0" aria-selected="false" className={styles.divOption}>2022</option>
                    <option id="Year-options-item-1" aria-selected="false" className={styles.divOption}>2021</option>
                    <option id="Year-options-item-2" aria-selected="false" className={styles.divOption}>2020</option>
                    <option id="Year-options-item-3" aria-selected="false" className={styles.divOption}>2019</option>
                    <option id="Year-options-item-4" aria-selected="false" className={styles.divOption}>2018</option>
                    <option id="Year-options-item-5" aria-selected="false" className={styles.divOption}>2017</option>
                    <option id="Year-options-item-6" aria-selected="false" className={styles.divOption}>2016</option>
                    <option id="Year-options-item-7" aria-selected="false" className={styles.divOption}>2015</option>
                    <option id="Year-options-item-8" aria-selected="false" className={styles.divOption}>2014</option>
                    <option id="Year-options-item-9" aria-selected="false" className={styles.divOption}>2013</option>
                    <option id="Year-options-item-10" aria-selected="false" className={styles.divOption}>2012</option>
                    <option id="Year-options-item-11" aria-selected="false" className={styles.divOption}>2011</option>
                    <option id="Year-options-item-12" aria-selected="false" className={styles.divOption}>2010</option>
                    <option id="Year-options-item-13" aria-selected="false" className={styles.divOption}>2009</option>
                    <option id="Year-options-item-14" aria-selected="false" className={styles.divOption}>2008</option>
                    <option id="Year-options-item-15" aria-selected="false" className={styles.divOption}>2007</option>
                    <option id="Year-options-item-16" aria-selected="false" className={styles.divOption}>2006</option>
                    <option id="Year-options-item-17" aria-selected="false" className={styles.divOption}>2005</option>
                    <option id="Year-options-item-18" aria-selected="false" className={styles.divOption}>2004</option>
                    <option id="Year-options-item-19" aria-selected="false" className={styles.divOption}>2003</option>
                    <option id="Year-options-item-20" aria-selected="false" className={styles.divOption}>2002</option>
                    <option id="Year-options-item-21" aria-selected="false" className={styles.divOption}>2001</option>
                    <option id="Year-options-item-22" aria-selected="false" className={styles.divOption}>2000</option>
                    <option id="Year-options-item-23" aria-selected="false" className={styles.divOption}>1999</option>
                    <option id="Year-options-item-24" aria-selected="false" className={styles.divOption}>1998</option>
                    <option id="Year-options-item-25" aria-selected="false" className={styles.divOption}>1997</option>
                    <option id="Year-options-item-26" aria-selected="false" className={styles.divOption}>1996</option>
                    <option id="Year-options-item-27" aria-selected="false" className={styles.divOption}>1995</option>
                    <option id="Year-options-item-28" aria-selected="false" className={styles.divOption}>1994</option>
                    <option id="Year-options-item-29" aria-selected="false" className={styles.divOption}>1993</option>
                    <option id="Year-options-item-30" aria-selected="false" className={styles.divOption}>1992</option>
                    <option id="Year-options-item-31" aria-selected="false" className={styles.divOption}>1991</option>
                    <option id="Year-options-item-32" aria-selected="false" className={styles.divOption}>1990</option>
                    <option id="Year-options-item-33" aria-selected="false" className={styles.divOption}>1989</option>
                    <option id="Year-options-item-34" aria-selected="false" className={styles.divOption}>1988</option>
                    <option id="Year-options-item-35" aria-selected="false" className={styles.divOption}>1987</option>
                    <option id="Year-options-item-36" aria-selected="false" className={styles.divOption}>1986</option>
                    <option id="Year-options-item-37" aria-selected="false" className={styles.divOption}>1985</option>
                    <option id="Year-options-item-38" aria-selected="false" className={styles.divOption}>1984</option>
                    <option id="Year-options-item-39" aria-selected="false" className={styles.divOption}>1983</option>
                    <option id="Year-options-item-40" aria-selected="false" className={styles.divOption}>1982</option>
                    <option id="Year-options-item-41" aria-selected="false" className={styles.divOption}>1981</option>
                    <option id="Year-options-item-42" aria-selected="false" className={styles.divOption}>1980</option>
                    <option id="Year-options-item-43" aria-selected="false" className={styles.divOption}>1979</option>
                    <option id="Year-options-item-44" aria-selected="false" className={styles.divOption}>1978</option>
                    <option id="Year-options-item-45" aria-selected="false" className={styles.divOption}>1977</option>
                    <option id="Year-options-item-46" aria-selected="false" className={styles.divOption}>1976</option>
                    <option id="Year-options-item-47" aria-selected="false" className={styles.divOption}>1975</option>
                    <option id="Year-options-item-48" aria-selected="false" className={styles.divOption}>1974</option>
                    <option id="Year-options-item-49" aria-selected="false" className={styles.divOption}>1973</option>
                    <option id="Year-options-item-50" aria-selected="false" className={styles.divOption}>1972</option>
                    <option id="Year-options-item-51" aria-selected="false" className={styles.divOption}>1971</option>
                    <option id="Year-options-item-52" aria-selected="false" className={styles.divOption}>1970</option>
                    <option id="Year-options-item-53" aria-selected="false" className={styles.divOption}>1969</option>
                    <option id="Year-options-item-54" aria-selected="false" className={styles.divOption}>1968</option>
                    <option id="Year-options-item-55" aria-selected="false" className={styles.divOption}>1967</option>
                    <option id="Year-options-item-56" aria-selected="false" className={styles.divOption}>1966</option>
                    <option id="Year-options-item-57" aria-selected="false" className={styles.divOption}>1965</option>
                    <option id="Year-options-item-58" aria-selected="false" className={styles.divOption}>1964</option>
                    <option id="Year-options-item-59" aria-selected="false" className={styles.divOption}>1963</option>
                    <option id="Year-options-item-60" aria-selected="false" className={styles.divOption}>1962</option>
                    <option id="Year-options-item-61" aria-selected="false" className={styles.divOption}>1961</option>
                    <option id="Year-options-item-62" aria-selected="false" className={styles.divOption}>1960</option>
                    <option id="Year-options-item-63" aria-selected="false" className={styles.divOption}>1959</option>
                    <option id="Year-options-item-64" aria-selected="false" className={styles.divOption}>1958</option>
                    <option id="Year-options-item-65" aria-selected="false" className={styles.divOption}>1957</option>
                    <option id="Year-options-item-66" aria-selected="false" className={styles.divOption}>1956</option>
                    <option id="Year-options-item-67" aria-selected="false" className={styles.divOption}>1955</option>
                    <option id="Year-options-item-68" aria-selected="false" className={styles.divOption}>1954</option>
                    <option id="Year-options-item-69" aria-selected="false" className={styles.divOption}>1953</option>
                    <option id="Year-options-item-70" aria-selected="false" className={styles.divOption}>1952</option>
                    <option id="Year-options-item-71" aria-selected="false" className={styles.divOption}>1951</option>
                    <option id="Year-options-item-72" aria-selected="false" className={styles.divOption}>1950</option>
                    <option id="Year-options-item-73" aria-selected="false" className={styles.divOption}>1949</option>
                    <option id="Year-options-item-74" aria-selected="false" className={styles.divOption}>1948</option>
                    <option id="Year-options-item-75" aria-selected="false" className={styles.divOption}>1947</option>
                    <option id="Year-options-item-76" aria-selected="false" className={styles.divOption}>1946</option>
                    <option id="Year-options-item-77" aria-selected="false" className={styles.divOption}>1945</option>
                    <option id="Year-options-item-78" aria-selected="false" className={styles.divOption}>1944</option>
                    <option id="Year-options-item-79" aria-selected="false" className={styles.divOption}>1943</option>
                    <option id="Year-options-item-80" aria-selected="false" className={styles.divOption}>1942</option>
                    <option id="Year-options-item-81" aria-selected="false" className={styles.divOption}>1941</option>
                    <option id="Year-options-item-82" aria-selected="false" className={styles.divOption}>1940</option>
                    <option id="Year-options-item-83" aria-selected="false" className={styles.divOption}>1939</option>
                    <option id="Year-options-item-84" aria-selected="false" className={styles.divOption}>1938</option>
                    <option id="Year-options-item-85" aria-selected="false" className={styles.divOption}>1937</option>
                    <option id="Year-options-item-86" aria-selected="false" className={styles.divOption}>1936</option>
                    <option id="Year-options-item-87" aria-selected="false" className={styles.divOption}>1935</option>
                    <option id="Year-options-item-88" aria-selected="false" className={styles.divOption}>1934</option>
                    <option id="Year-options-item-89" aria-selected="false" className={styles.divOption}>1933</option>
                    <option id="Year-options-item-90" aria-selected="false" className={styles.divOption}>1932</option>
                    <option id="Year-options-item-91" aria-selected="false" className={styles.divOption}>1931</option>
                    <option id="Year-options-item-92" aria-selected="false" className={styles.divOption}>1930</option>
                    <option id="Year-options-item-93" aria-selected="false" className={styles.divOption}>1929</option>
                    <option id="Year-options-item-94" aria-selected="false" className={styles.divOption}>1928</option>
                    <option id="Year-options-item-95" aria-selected="false" className={styles.divOption}>1927</option>
                    <option id="Year-options-item-96" aria-selected="false" className={styles.divOption}>1926</option>
                    <option id="Year-options-item-97" aria-selected="false" className={styles.divOption}>1925</option>
                    <option id="Year-options-item-98" aria-selected="false" className={styles.divOption}>1924</option>
                    <option id="Year-options-item-99" aria-selected="false" className={styles.divOption}>1923</option>
                    <option id="Year-options-item-100" aria-selected="false" className={styles.divOption}>1922</option>
                    <option id="Year-options-item-101" aria-selected="false" className={styles.divOption}>1921</option>
                    <option id="Year-options-item-102" aria-selected="false" className={styles.divOption}>1920</option>
                    <option id="Year-options-item-103" aria-selected="false" className={styles.divOption}>1919</option>
                    <option id="Year-options-item-104" aria-selected="false" className={styles.divOption}>1918</option>
                    <option id="Year-options-item-105" aria-selected="false" className={styles.divOption}>1917</option>
                    <option id="Year-options-item-106" aria-selected="false" className={styles.divOption}>1916</option>
                    <option id="Year-options-item-107" aria-selected="false" className={styles.divOption}>1915</option>
                    <option id="Year-options-item-108" aria-selected="false" className={styles.divOption}>1914</option>
                    <option id="Year-options-item-109" aria-selected="false" className={styles.divOption}>1913</option>
                    <option id="Year-options-item-110" aria-selected="false" className={styles.divOption}>1912</option>
                    <option id="Year-options-item-111" aria-selected="false" className={styles.divOption}>1911</option>
                    <option id="Year-options-item-112" aria-selected="false" className={styles.divOption}>1910</option>
                    <option id="Year-options-item-113" aria-selected="false" className={styles.divOption}>1909</option>
                    <option id="Year-options-item-114" aria-selected="false" className={styles.divOption}>1908</option>
                    <option id="Year-options-item-115" aria-selected="false" className={styles.divOption}>1907</option>
                    <option id="Year-options-item-116" aria-selected="false" className={styles.divOption}>1906</option>
                    <option id="Year-options-item-117" aria-selected="false" className={styles.divOption}>1905</option>
                    <option id="Year-options-item-118" aria-selected="false" className={styles.divOption}>1904</option>
                    <option id="Year-options-item-119" aria-selected="false" className={styles.divOption}>1903</option>
                    <option id="Year-options-item-120" aria-selected="false" className={styles.divOption}>1902</option>
                    <option id="Year-options-item-121" aria-selected="false" className={styles.divOption}>1901</option>
                    <option id="Year-options-item-122" aria-selected="false" className={styles.divOption}>1900</option>
                </>
            )

        case 'cc':
            return (
                <>
                    <option id="Day-options-item-0" aria-selected="false" className={styles.divOption}>1ff</option>
                    <option id="Day-options-item-1" aria-selected="false" className={styles.divOption}>2</option>
                </>
            )

        default:
            return null

    }

}

export default Option