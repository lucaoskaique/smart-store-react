// import React, { useState } from "react";
// import * as S from "./styles.js"

// const Filtro = () => {
//   const [preco, setPreco] = useState("");
//   const [armazenamento, setArmazenamento] = useState("");
//   const [cor, setCor] = useState("");

//   const handleChangePreco = (event) => {
//     setPreco(event.target.value);
//   };

//   const handleChangeArmazenamento = (event) => {
//     setArmazenamento(event.target.value);
//   };

//   const handleChangeCor = (event) => {
//     setCor(event.target.value);
//   };

//   return (
//     <S.FiltroContainer>
//       <h2>Filtrar por:</h2>
//       <S.Filtro>
//         <h3>Preço:</h3>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="0-1000"
//             checked={preco === "0-1000"}
//             onChange={handleChangePreco}
//           />
//           Até R$ 1.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="1001-2000"
//             checked={preco === "1001-2000"}
//             onChange={handleChangePreco}
//           />
//           R$ 1.001 - R$ 2.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="2001-3000"
//             checked={preco === "2001-3000"}
//             onChange={handleChangePreco}
//           />
//           R$ 2.001 - R$ 3.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="3001-4000"
//             checked={preco === "3001-4000"}
//             onChange={handleChangePreco}
//           />
//           R$ 3.001 - R$ 4.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="4001-5000"
//             checked={preco === "4001-5000"}
//             onChange={handleChangePreco}
//           />
//           R$ 4.001 - R$ 5.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="5001-6000"
//             checked={preco === "5001-6000"}
//             onChange={handleChangePreco}
//           />
//           R$ 5.001 - R$ 6.000
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="preco"
//             value="6001-7000"
//             checked={preco === "6001-7000"}
//             onChange={handleChangePreco}
//           />
//           R$ 6.001 - R$ 7.000
//         </label>
//       </S.Filtro>
//       <S.Filtro>
//         <h3>Armazenamento:</h3>
//         <label>
//           <input
//             type="checkbox"
//             name="armazenamento"
//             value="64"
//             checked={armazenamento.includes("64")}
//             onChange={handleChangeArmazenamento}
//           />
//           64 GB
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="armazenamento"
//             value="128"
//             checked={armazenamento.includes("128")}
//             onChange={handleChangeArmazenamento}
//           />
//           128 GB
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="armazenamento"
//             value="256"
//             checked={armazenamento.includes("256")}
//             onChange={handleChangeArmazenamento}
//           />
//           256 GB
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="armazenamento"
//             value="512"
//             checked={armazenamento.includes("512")}
//             onChange={handleChangeArmazenamento}
//           />
//           512 GB
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="armazenamento"
//             value="1024"
//             checked={armazenamento.includes("1024")}
//             onChange={handleChangeArmazenamento}
//           />
//           1 TB
//         </label>
//       </S.Filtro>
//       <S.Filtro>
//         <h3>Cor:</h3>
//         <label>
//           <input
//             type="checkbox"
//             name="cor"
//             value="azul"
//             checked={cor.includes("azul")}
//             onChange={handleChangeCor}
//           />
//           Azul
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="cor"
//             value="branco"
//             checked={cor.includes("branco")}
//             onChange={handleChangeCor}
//           />
//           Branco
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="cor"
//             value="preto"
//             checked={cor.includes("preto")}
//             onChange={handleChangeCor}
//           />
//           Preto
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="cor"
//             value="roxo"
//             checked={cor.includes("roxo")}
//             onChange={handleChangeCor}
//           />
//           Roxo
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="cor"
//             value="dourado"
//             checked={cor.includes("dourado")}
//             onChange={handleChangeCor}
//           />
//           Dourado
//         </label>
//       </S.Filtro>
//     </S.FiltroContainer>
//   );
// };

