import * as from "react";
import { ChakraProvider } from '@chakra-ui/react'

import "normalize.css";

import * as ReactDOM from "react-dom";

const root = document.createElement("div");
root.id = "root";

document.body.appendChild(root);

ReactDOM.render(
  (
    <ChakraProvider></ChakraProvider>
  ),
  root
);

