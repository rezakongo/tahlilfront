import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Table, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import { makeStyles } from "@material-ui/core/styles";
import Cover from "./cover-dsotm.jpg";
import './HomePageTracks.css';

const TableExampleUnstackable = () => (
  <Table className="table" unstackable inverted>
    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Speak to Me</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={3.8}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Breathe</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.2}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>On the Run</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Time</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.7}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>The Great Gig in the Sky</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.4}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Money</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.4}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>7</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Us and Them</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.5}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>8</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Any Colour You Like</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>9</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Brain Damage</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.5}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
      <Table.Row>
        <Table.Cell>10</Table.Cell>
        <Table.Cell>
          <Image
            src={Cover}
            rounded
            size="mini"
          />
        </Table.Cell>
        <Table.Cell>Eclipse</Table.Cell>
        <Table.Cell>Pink Floyd</Table.Cell>
        <Table.Cell>
          <Rating
            value={4.1}
            precision={0.1}
            size={"small"}
            readOnly={true}
          ></Rating>
        </Table.Cell>{" "}
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleUnstackable;
