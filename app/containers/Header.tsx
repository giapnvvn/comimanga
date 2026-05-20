'use client';

import React from "react";
import { Container, Flex, Button, Link } from "@radix-ui/themes";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LuCircleUser } from "react-icons/lu";


const Header: React.FC = () => {

  return (
    <Container size="4" style={{background:"var(--slate-3)"}}>
        <Flex align="center" justify="between" style={{ padding: "16px 0" }}>
          <img src="/light-logo.webp" alt="Comicola" width={100} height={100} />

          {/* Navigation Links */}
          <Flex gap="4">
            <Link href="#" weight='bold' underline="always">TRUYỆN TRANH</Link>
            <Link href="#" weight='bold'>TIỂU THUYẾT</Link>
            <Link href="#" weight='bold'>CỬA HÀNG</Link>
            <Link href="#" weight='bold'>ĐĂNG TRUYỆN</Link>
          </Flex>
    
          <Flex gap="3">
            <Button variant="ghost"><HiMiniMagnifyingGlass size="28"/></Button>
            <Button variant="ghost"><PiHandbagSimpleBold size="28"/></Button>
            <Button variant="ghost"><LuCircleUser size="28"/></Button>
          </Flex>
        </Flex>
    </Container>
  );
};

export default Header;