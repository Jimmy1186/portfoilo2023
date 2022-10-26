import { Formik, Form, Field } from "formik";
import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const initialValues = {
  message: "",
};

const insertSchema = z.object({
  message: z.string().min(1,"必填")
});

type insertType = z.infer<typeof insertSchema>;

type commentType ={
  refetch:()=>void
}

const Comments= ({refetch}:commentType) => {
  const { data: session } = useSession();
  const insertMessageMutation = trpc.auth.insetComment.useMutation({
    onSuccess:()=>refetch()
  });

  const submitHandler = (values: insertType, action: any) => {
    console.log(values);
    insertMessageMutation.mutate({
      message:values.message
    })
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={toFormikValidationSchema(insertSchema)}
      >
        {(props) => (
          <Form>
            <span>{props.errors.message}</span>
            <div className=" flex gap-3">
              <input
                type="text"
                title="comments"
                value={props.values.message}
                onChange={props.handleChange}
                name="message"
                className="w-3/5 rounded p-3"
              />

              {session == null ? (
                <div
                  onClick={() => signIn("google")}
                  className="blown-200 flex  w-2/5 cursor-pointer items-center justify-center rounded border-2"
                >
                  留言? 先登入Google喔
                </div>
              ) : (
                <button
                  type="submit"
                  className="blown-200 w-2/5  rounded border-2"
                >
                  送出
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Comments;
