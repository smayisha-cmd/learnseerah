{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 export default function handler(req, res) \{\
  const database = \{\
    "Q96:1-5": \{\
      source: "Qur'an 96:1-5",\
      arabic: "\uc0\u1575 \u1602 \u1618 \u1585 \u1614 \u1571 \u1618  \u1576 \u1616 \u1575 \u1587 \u1618 \u1605 \u1616  \u1585 \u1614 \u1576 \u1616 \u1617 \u1603 \u1614  \u1575 \u1604 \u1614 \u1617 \u1584 \u1616 \u1610  \u1582 \u1614 \u1604 \u1614 \u1602 \u1614 ",\
      grading: "Mutawatir"\
    \}\
  \};\
\
  const \{ ref \} = req.query;\
  if (!database[ref]) \{\
    return res.status(404).json(\{ error: "Reference not found" \});\
  \}\
\
  res.status(200).json(database[ref]);\
\}}