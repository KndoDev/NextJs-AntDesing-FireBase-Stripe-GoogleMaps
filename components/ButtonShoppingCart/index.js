import React from "react"
import { Badge } from "antd"
import { ShopTwoTone } from "@ant-design/icons"
import Link from "next/link"
import Styles from "./styles"
export default function index(props) {
  return (
    <>
      <div>
        <Link href="/carrito" passHref>
          <Badge count={props.car}>
            <ShopTwoTone style={{ fontSize: "40px", color: "#CBFAFF" }} />
          </Badge>
        </Link>
      </div>
      <style jsx>{Styles}</style>
    </>
  )
}
