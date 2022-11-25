import { useMutation, useQuery } from '@tanstack/react-query';
import { onPressMemberForm, onPressTaskForm } from '../helpers/MethodSelector';
import { queryClient } from './config';
import { deleteMember, getAllMembers } from './model/memberAPI';
import { deleteTask, getAllTasks } from './model/taskAPI';


