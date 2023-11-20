'use client'
import { Button, CalloutRoot, CalloutText, Text, TextField, TextFieldRoot } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import issueSchema from "@/app/api/issuesSchema";
import Spinner from "@/app/components/Spinner";

interface IssueForm{
    title: string,
    description: string
}

const NewIssuePage = () => {

    const{register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<IssueForm>({resolver: zodResolver(issueSchema)});
    const router = useRouter();
    const[serverError, setServerError] = useState('')

    const formSubmit = async (data:IssueForm) => {
        try {
            await axios.post('http://localhost:3000/api/issues', data);
            router.push('/issues');
        }catch (error) {
            setServerError('An unexpecteded error occured')
        }
    }

    return (
        <div className="max-w-xl">
            {serverError && <CalloutRoot color="red">
                    <CalloutText>{serverError}</CalloutText>
                </CalloutRoot>}
            <form onSubmit={handleSubmit(formSubmit)} className="max-w-xl p-4 space-y-3">
                <TextFieldRoot>
                    <TextField.Input placeholder="Title" {...register("title")}/>
                </TextFieldRoot>
                {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}

                <Controller 
                    name= "description"
                    control={control}
                    render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
                />
                {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
                <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner/>}</Button>
            </form>
        </div>
    )
}

export default NewIssuePage