import React, {useState,useEffect} from "react";
import './Content.css'

//Imported input from Chakra
import { Input } from '@chakra-ui/react'

// Imported table from Chacra Ui
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
// Imported Button from Material UI
import Button from '@mui/material/Button';

const Content = () => {
  return (
    <div>
      <div className="content">
          <div className="content___top">
                <Input placeholder='Basic usage' />
                <Button type="submit" className="plusBtn" variant="contained">+</Button>
          </div>
          <div className="content___bottom"></div>
      </div>
    </div>
  )
}

export default Content
