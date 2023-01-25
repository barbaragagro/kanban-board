import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import subtasks from "./assets/comments.svg";
import comments from "./assets/subtasks.svg";
import data from "./data.json";

type Props = {
  startDate: string | null;
  dueDate: string | null;
  commentCount: number | never;
  openSubtasks: number | never;
  border: boolean;
  firstLine: string;
  label: number[] | never | number;
  avatar: number[];
  completedTasks: boolean;
};

export default function BasicCard(props: Props) {
  let myNumber = props.label;
  let tempString = myNumber + "";
  let arr1 = tempString.split("");

  let arr2 = arr1.map((arr: string) => {
    return +arr - 1;
  });

  const users = data.users.map((user) => {
    return user.avatar_url;
  });

  let variab = data.labels.map((el) => el.color);
  let divStyle;
  let colorFunc: any = (index: number) => {
    return (divStyle = {
      backgroundColor: [variab[index]],
    });
  };

  let borderStyle;
  const BorderFunc = (props: boolean) => {
    if (props === true) {
      return (borderStyle = "border-l-4 border-red-600");
    }
  };

  const MonthNames: string[] = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const DateConversion = (date: string) => {
    const newDate: Date = new Date(date);
    return (
      <h6 className="px-2">
        {MonthNames[newDate.getMonth()]} {newDate.getDate()}.{" "}
        {newDate.getFullYear() != 2023 && newDate.getFullYear() + "."}
      </h6>
    );
  };
  let BgStyle: string;
  const CompletedCardColor = (isBlue: boolean) => {
    if (isBlue === true) {
      return (BgStyle = "bg-teal-50");
    }
  };
  let countColors: number = 0;

  return (
    <div>
      {props.firstLine != "" && (
        <Card
          className={`${BorderFunc(props.border)} m-2`}
          sx={{ minWidth: 275 }}
        >
          <CardContent className={CompletedCardColor(props.completedTasks)}>
            <h3 className=" font-semibold">{props.firstLine}</h3>
            <div className="flex">
              <>
                <div className="flex mr-4">
                  {arr2.map((el: number, index: number) => {
                    if (index > 11) {
                      countColors++;
                    }
                    return index < 12 ? (
                      <div
                        key={index}
                        className=" w-2.5 h-2.5 rounded-lg  my-2"
                        style={colorFunc(el)}
                      ></div>
                    ) : (
                      ""
                    );
                  })}
                  {countColors != 0 && <p>+{countColors}</p>}
                </div>
                {props.commentCount != 0 && (
                  <div className="flex">
                    {myNumber != 0 && (
                      <p className="pt-0.5 text-sm mr-1 text-gray-400">•</p>
                    )}
                    <img className="w-4 h-4 mt-1 " src={comments}></img>{" "}
                    <p className="px-2 text-gray-400">{props.commentCount}</p>{" "}
                  </div>
                )}
                {props.openSubtasks != 0 && (
                  <div className="flex">
                    {props.commentCount != 0 && (
                      <p className="pt-0.5 text-sm mr-1 text-gray-400">•</p>
                    )}
                    <img className="w-4 h-4 mt-1" src={subtasks}></img>{" "}
                    <p className="px-2 text-gray-400">{props.openSubtasks}</p>{" "}
                  </div>
                )}
              </>
            </div>
            <div className="flex font-bold ">
              {props.startDate != null && DateConversion(props.startDate)}
              {props.startDate != null && "-"}
              {props.dueDate != null && DateConversion(props.dueDate)}
            </div>

            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2"></Typography>
            <div className="flex flex-row justify-end">
              {props.avatar &&
                props.avatar.map((avatar: number) => {
                  return (
                    <img
                      key={avatar}
                      className=" -mx-px  rounded-xl w-8 h-8"
                      src={users[avatar - 1]}
                    ></img>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
